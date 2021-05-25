import classes from './starting-page.module.css'

function StartingPageContent() {
  // 如果未验证，则显示“链接到登录”页面

  return (
    <section className={classes.starting}>
      <h1>欢迎来到我的博客！</h1>
    </section>
  )
}

export default StartingPageContent
