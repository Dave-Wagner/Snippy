import * as vscode from "vscode";
import { copyAllOpenFiles } from "./lib/utils";

/**
 * Activates the Snippy extension.
 * @param context - The extension context.
 */
export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand("extension.snippy", copyAllOpenFiles);
    context.subscriptions.push(disposable);
}
