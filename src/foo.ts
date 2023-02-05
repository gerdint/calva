import vscode from 'vscode';
import os from 'os';
import { someFunction } from './bar';

export function hello() {
  return 'hello';
}

export function callSomeFunctionFromBar() {
  return someFunction();
}

export function platform() {
  return os.platform();
}

export function showMessage(message: string) {
  void vscode.window.showInformationMessage(message);
}
