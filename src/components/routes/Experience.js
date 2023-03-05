import PropTypes from "prop-types";
import Nav from "../Nav";
import Footer from "../Footer";
import globalStyles from "../../css/App.module.css"
import styles from "../../css/Experience.module.css"

const Experience = ({ page, setPage }) => {
  setPage("Experience")
  const listItems =
    [
      {
        text: "Optimize/Maintain API infrastructure",
        key: 1
      }, {
        text: "Develop new features",
        key: 2
      }, {
        text: "Write tests using RSPEC and Capybara",
        key: 3
      }, {
        text: "Write documentation",
        key: 3
      }, {
        text: "Work with the team to implement/debug features",
        key: 3
      }, {
        text: "Actively contribute to QA process",
        key: 3
      }
    ]
  return (
    <div className={globalStyles.parentDiv}>
      <Nav
        page={page}
      ></Nav>
      <div class={globalStyles.mainPage}>
        <div class={globalStyles.mainPageGreetBox}>
          <h1 class={globalStyles.greet}>
            Professional Experience
          </h1>
          <p class={globalStyles.greet}>Code The Dream Labs (<i>October 2021 - present</i>)</p>
          <p class={[globalStyles.greet, globalStyles.text].join(' ')}><a href="https://labs.codethedream.org/portfolios/alton-michaux" target="blank">Backend Developer</a> on the <a href="https://sites.google.com/view/vamosprojectwiki/home" target="none">Vamos app</a></p>
          <ul class={[styles.taskList, globalStyles.greet].join(' ')}> A short list of my duties and contributions to Vamos include:
            {listItems.map((item) => {
              return (
                <li key={item.key} className={styles.taskItem}>{item.text}</li>
              )
            })}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

Experience.propTypes = {
  page: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired
}

export default Experience
