# TXT阅读器 - GitHub托管指南

这个文档将指导你如何将TXT阅读器应用托管到GitHub Pages上，使其可以在任何设备上通过网络访问，包括iPad和手机。

## 前提条件

- 一个GitHub账号
- 已构建好的TXT阅读器应用（dist文件夹）

## 步骤一：创建GitHub账号（如果没有）

1. 访问 [GitHub官网](https://github.com)
2. 点击右上角的"Sign up"按钮
3. 按照提示填写用户名、邮箱和密码
4. 完成验证步骤
5. 选择免费计划
6. 完成账号设置

## 步骤二：创建新的GitHub仓库

1. 登录GitHub账号
2. 点击右上角的"+"图标，选择"New repository"
3. 填写仓库名称，例如：`txtreader`
4. 添加描述（可选）：`TXT阅读器的网页版本`
5. 选择公开（Public）仓库
6. 勾选"Add a README file"（可选）
7. 点击"Create repository"按钮

## 步骤三：上传应用文件

### 方法一：通过GitHub网页界面上传（简单但适合少量文件）

1. 进入你刚创建的仓库
2. 点击"Add file"按钮，选择"Upload files"
3. 将dist文件夹中的所有文件拖拽到上传区域
4. 添加提交信息，例如："上传TXT阅读器应用文件"
5. 点击"Commit changes"按钮

### 方法二：使用Git命令上传（适合大量文件或频繁更新）

1. 安装Git（如果尚未安装）：[下载Git](https://git-scm.com/downloads)
2. 打开命令行终端（CMD或PowerShell）
3. 导航到你的项目文件夹：
   ```
   cd c:\Users\safe_\txtreader
   ```
4. 初始化Git仓库：
   ```
   git init
   ```
5. 添加远程仓库（替换`YOUR_USERNAME`为你的GitHub用户名）：
   ```
   git remote add origin https://github.com/YOUR_USERNAME/txtreader.git
   ```
6. 创建`.gitignore`文件，排除不需要上传的文件：
   ```
   node_modules/
   .DS_Store
   ```
7. 添加所有文件到暂存区：
   ```
   git add .
   ```
8. 提交更改：
   ```
   git commit -m "初始化TXT阅读器应用"
   ```
9. 推送到GitHub：
   ```
   git push -u origin master
   ```

## 步骤四：配置GitHub Pages

1. 在GitHub仓库页面，点击"Settings"选项卡
2. 在左侧菜单中，找到并点击"Pages"
3. 在"Source"部分，选择分支（通常是`main`或`master`）
4. 如果你上传的是整个项目（包含dist文件夹），则在下拉菜单中选择`/docs`或创建新分支，并将dist文件夹内容放在根目录
5. 如果你只上传了dist文件夹的内容，则选择根目录`/`
6. 点击"Save"按钮
7. 等待几分钟，GitHub会自动构建你的网站
8. 页面会显示你的网站URL，通常格式为：`https://YOUR_USERNAME.github.io/txtreader/`

## 步骤五：在iPad上安装为PWA应用

1. 在iPad上打开Safari浏览器
2. 访问你的GitHub Pages网站URL
3. 点击分享按钮（方框加箭头图标）
4. 选择"添加到主屏幕"选项
5. 输入应用名称（例如：TXT阅读器）
6. 点击"添加"按钮

现在，TXT阅读器应用已成功托管在GitHub Pages上，并可以在iPad上作为PWA应用使用。你可以随时通过GitHub更新应用，更新后用户只需刷新网页即可获取最新版本。