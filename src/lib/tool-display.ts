export function formatToolInvocation(tool: any): string {
  const toolName = tool.toolName;
  const args = typeof tool.args === "string" ? JSON.parse(tool.args) : tool.args || {};

  if (toolName === "str_replace_editor") {
    const command = args.command;
    const path = args.path;

    switch (command) {
      case "create":
        return `正在创建 ${path}`;
      case "str_replace":
        return `正在编辑 ${path}`;
      case "insert":
        return `正在插入内容到 ${path}`;
      case "view":
        return `正在查看 ${path}`;
      default:
        return `文件操作: ${path}`;
    }
  }

  if (toolName === "file_manager") {
    const command = args.command;
    const path = args.path;
    const newPath = args.new_path;

    switch (command) {
      case "rename":
        return `正在重命名 ${path} → ${newPath}`;
      case "delete":
        return `正在删除 ${path}`;
      default:
        return `文件管理: ${path}`;
    }
  }

  return toolName;
}

export function formatCompletedToolInvocation(tool: any): string {
  const toolName = tool.toolName;
  const args = typeof tool.args === "string" ? JSON.parse(tool.args) : tool.args || {};

  if (toolName === "str_replace_editor") {
    const command = args.command;
    const path = args.path;

    switch (command) {
      case "create":
        return `已创建 ${path}`;
      case "str_replace":
        return `已编辑 ${path}`;
      case "insert":
        return `已插入内容到 ${path}`;
      case "view":
        return `已查看 ${path}`;
      default:
        return `文件操作完成: ${path}`;
    }
  }

  if (toolName === "file_manager") {
    const command = args.command;
    const path = args.path;
    const newPath = args.new_path;

    switch (command) {
      case "rename":
        return `已重命名 ${newPath}`;
      case "delete":
        return `已删除 ${path}`;
      default:
        return `文件管理完成: ${path}`;
    }
  }

  return toolName;
}
