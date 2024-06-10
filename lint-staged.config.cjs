module.exports = {
  '*.{png,jpeg,jpg,gif,svg}': (files) => {
    // 排除 before-assets 資料夾及其子資料夾中的所有文件
    const filteredFiles = files.filter((file) => !/before-assets/.test(file))

    return `imagemin-lint-staged ${filteredFiles.join(' ')}`
  },
}
