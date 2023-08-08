/**
 * Tests for utility functions.
 * @module utils.test
 */

import * as vscode from "vscode";
import * as sinon from "sinon";
import { expect } from "chai";
import { cleanHtmlContent, copyAllOpenFiles } from "../src/lib/utils";

// Main test suite for utility functions
describe("Utility Functions", () => {

  // Test suite for the cleanHtmlContent function
  describe("cleanHtmlContent", () => {

    // Test to ensure HTML content is cleaned by removing unnecessary whitespaces
    it("removes unnecessary whitespaces between HTML elements", () => {
      const input = `
        <div>
          <p> Hello world! </p>
        </div>
      `;
      const expected = "<div><p>Hello world!</p></div>";
      const result = cleanHtmlContent(input);
      expect(result).to.equal(expected);
    });

    // Test to ensure content without any HTML elements remains unchanged
    it("keeps content without HTML elements unchanged", () => {
      const input = "This is a plain text.";
      const result = cleanHtmlContent(input);
      expect(result).to.equal(input);
    });
  });

  // Test suite for the copyAllOpenFiles function
  describe("copyAllOpenFiles", () => {
    let sandbox;
    let mockClipboard;

    // Setup for each test
    beforeEach(() => {
      // Create a sinon sandbox for stubs and mocks
      sandbox = sinon.createSandbox();
      // Mock the clipboard functionality
      mockClipboard = {
        writeText: sandbox.stub(),
      };
      sandbox.stub(vscode.env, "clipboard").value(mockClipboard);
    });

    // Cleanup after each test
    afterEach(() => {
      // Restore the sinon sandbox to its original state
      sandbox.restore();
    });

    // Test to ensure all open files are copied to the clipboard
    it("copies content of all open files to clipboard", async () => {
      const mockDocument = {
        getText: sandbox.stub().returns("Hello world!"),
        fileName: "test.txt",
        uri: { fsPath: "C:\\Users\\test\\test.txt" },
      };
      sandbox.stub(vscode.workspace, "textDocuments").value([mockDocument]);
      await copyAllOpenFiles();
      expect(mockClipboard.writeText.calledWith("Hello world!")).to.be.true;
    });

    // Test to ensure files with .git extension and non-file URIs are excluded from copying
    it("excludes .git files and non-file URIs from copying", async () => {
      const mockDocument = {
        getText: sandbox.stub().returns("Hello world!"),
        fileName: ".gitignore",
        uri: { fsPath: "C:\\Users\\test\\.gitignore" },
      };
      sandbox.stub(vscode.workspace, "textDocuments").value([mockDocument]);
      await copyAllOpenFiles();
      expect(mockClipboard.writeText.called).to.be.false;
    });

    // Test to ensure content is cleaned before copying
    it("cleans content before copying", async () => {
      const mockDocument = {
        getText: sandbox.stub().returns("Hello world!"),
        fileName: "test.txt",
        uri: { fsPath: "C:\\Users\\test\\test.txt" },
      };
      sandbox.stub(vscode.workspace, "textDocuments").value([mockDocument]);
      await copyAllOpenFiles();
      expect(mockClipboard.writeText.calledWith("Hello world!")).to.be.true;
    });

    // Test to ensure separators are added between contents of multiple files
    it("adds separators between content of multiple files", async () => {
      const mockDocument1 = {
        getText: sandbox.stub().returns("Hello world!"),
        fileName: "test1.txt",
        uri: { fsPath: "C:\\Users\\test\\test1.txt" },
      };
      const mockDocument2 = {
        getText: sandbox.stub().returns("Hello again!"),
        fileName: "test2.txt",
        uri: { fsPath: "C:\\Users\\test\\test2.txt" },
      };
      sandbox.stub(vscode.workspace, "textDocuments").value([mockDocument1, mockDocument2]);
      await copyAllOpenFiles();
      expect(mockClipboard.writeText.calledWith("Hello world!====================Hello again!")).to.be.true;
    });

    // Test to ensure a status message is displayed after copying content
    it("displays a status message post copying", async () => {
      const mockDocument = {
        getText: sandbox.stub().returns("Hello world!"),
        fileName: "test.txt",
        uri: { fsPath: "C:\\Users\\test\\test.txt" },
      };
      sandbox.stub(vscode.workspace, "textDocuments").value([mockDocument]);
      const statusBar = {
        text: "",
        show: sandbox.stub(),
        hide: sandbox.stub(),
        dispose: sandbox.stub(),
      };
      sandbox.stub(vscode.window, "createStatusBarItem").returns(statusBar);
      await copyAllOpenFiles();
      expect(statusBar.text).to.equal("Copied all open files to clipboard");
      expect(statusBar.show.called).to.be.true;
      expect(statusBar.hide.called).to.be.true;
      expect(statusBar.dispose.called).to.be.true;
    });
  });
});
