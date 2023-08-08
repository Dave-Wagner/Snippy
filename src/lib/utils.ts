import * as vscode from "vscode";
import * as path from "path";

/**
 * Strips newlines, erroneous spaces, and tabs between HTML elements.
 * @param content - The content to be cleaned up.
 * @returns The cleaned up content.
 */
export function cleanHtmlContent(content: string): string {
    return content
        .replace(/\s*(<[^>]+>)\s*/g, "$1")
        .replace(/[\r\n]+/g, "");
}

/**
 * Generates the separator sequence based on user settings.
 * @param fileName - Name of the file.
 * @param filePath - Path of the file.
 * @returns The separator sequence string.
 */
async function getSeparatorSequence(fileName: string, filePath: string): Promise<string> {
    const config = vscode.workspace.getConfiguration("snippy");
    const DEFAULT_SEPARATOR = "<#-(FILE_NAME_WITH_PATH)-#>";
    const separatorFormat = config.get<string>("separatorFormat") || DEFAULT_SEPARATOR;
    const fileStat = await vscode.workspace.fs.stat(vscode.Uri.file(filePath));
    const dateOptions: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    };
    const userLocale = Intl.DateTimeFormat().resolvedOptions().locale;
    return separatorFormat
        .replace("FILE_NAME_WITH_PATH", filePath)
        .replace("FILE_NAME", fileName)
        .replace("TIMESTAMP", new Date(Date.now()).toLocaleTimeString(userLocale))
        .replace("LAST_MODIFIED", new Date(fileStat.mtime).toLocaleTimeString(userLocale))
        .replace("LAST_MODIFIED_DATE", new Date(fileStat.mtime).toLocaleDateString(userLocale, dateOptions));
}

/**
 * Copies all open files' content to the clipboard without newlines.
 * Ignores .git files and non-file URIs.
 * Automatically saves unsaved or modified documents before copying the content.
 */
export async function copyAllOpenFiles() {
    await vscode.workspace.saveAll();
    const content: string[] = [];
    for (const document of vscode.workspace.textDocuments) {
        if (document.uri.scheme !== "file" || document.fileName.endsWith(".git")) {
            continue;
        }
        const filePath = document.fileName;
        const fileName = path.basename(filePath);
        const cleanedContent = cleanHtmlContent(document.getText());
        const separatorSequence = await getSeparatorSequence(fileName, filePath);
        content.push(`${separatorSequence}\n${cleanedContent}\n${separatorSequence}`);
    }
    const clipboardContent = content.join("\n");
    await vscode.env.clipboard.writeText(clipboardContent);
    vscode.window.setStatusBarMessage("Snippy: All open files copied to the clipboard!", 3000);
}
