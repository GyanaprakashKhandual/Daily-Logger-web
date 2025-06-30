import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  let disposable = vscode.commands.registerCommand("cucumberStepGen.generateStep", async () => {
    const editor = vscode.window.activeTextEditor;
    if (!editor) {
      vscode.window.showErrorMessage("No active editor found.");
      return;
    }

    const document = editor.document;
    const selection = editor.selection;
    const selectedText = document.getText(selection).trim();

    let stepDefinitions = "";

    if (selectedText) {
      // Handle multi-line selection
      const selectedLines = selectedText.split("\n").map(line => line.trim());
      const validSteps = getValidCucumberSteps(selectedLines);

      if (validSteps.length === 0) {
        vscode.window.showWarningMessage("No valid Cucumber steps found in the selection.");
        return;
      }

      stepDefinitions = generateUniqueStepDefinitions(validSteps);
    } else {
      // If no selection, process entire document
      const allText = document.getText();
      const lines = allText.split("\n").map(line => line.trim());
      const validSteps = getValidCucumberSteps(lines);

      if (validSteps.length === 0) {
        vscode.window.showWarningMessage("No valid Cucumber steps found in the document.");
        return;
      }

      stepDefinitions = generateUniqueStepDefinitions(validSteps);
    }

    // Copy to clipboard
    await vscode.env.clipboard.writeText(stepDefinitions);
    vscode.window.showInformationMessage("Step Definition(s) Copied!");
  });

  context.subscriptions.push(disposable);

  // Add a button to the status bar
  const stepDefButton = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  stepDefButton.command = "cucumberStepGen.generateStep";
  stepDefButton.text = "$(checklist) Generate Steps";
  stepDefButton.tooltip = "Generate and Copy Step Definitions";
  stepDefButton.show();

  context.subscriptions.push(stepDefButton);
}

function getValidCucumberSteps(lines: string[]): string[] {
  return [...new Set(lines.filter(line => /^(Given|When|Then|And)\s/.test(line)))]; // Remove duplicates
}

function generateUniqueStepDefinitions(steps: string[]): string {
  const methodNames: Set<string> = new Set();

  return steps.map(step => {
    const stepDefinition = generateStepDefinition(step, methodNames);
    return stepDefinition ? stepDefinition : "";
  }).join("\n\n");
}

function generateStepDefinition(step: string, methodNames: Set<string>): string {
  let matches = step.match(/^(Given|When|Then|And)\s+(.*)$/);
  if (!matches) {
    return "";
  }

  let annotation = `@${matches[1]}`;
  let stepText = matches[2];

  // Convert step text into a valid Java method name
  let methodName = stepText
    .replace(/[^a-zA-Z0-9\s]/g, "") // Remove special characters
    .trim()
    .split(/\s+/)
    .join("_")
    .toLowerCase();

  // Ensure method name is unique
  let uniqueMethodName = methodName;
  let counter = 1;
  while (methodNames.has(uniqueMethodName)) {
    uniqueMethodName = `${methodName}_${counter}`;
    counter++;
  }
  methodNames.add(uniqueMethodName);

  // Convert step into a parameterized format
  let parameterizedStep = stepText.replace(/"([^"]*)"/g, `"(.*)"`);

  return `${annotation}("^${parameterizedStep}$")\npublic void ${uniqueMethodName}() {\n    // TODO: Implement step logic here\n}`;
}

export function deactivate() {}
