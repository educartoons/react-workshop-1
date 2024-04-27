import { describe, test } from "vitest"
import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import Task, { TaskProps } from "./Task"
import { store } from "../store/store"

describe("<Task />", () => {
  const props: TaskProps = {
    task: {
      id: "0",
      title: "Creating a test",
      level: "medium",
    },
    namePrevList: null,
    nameCurrentList: "todo",
    nameNextList: "inprogress",
  }
  test("renders", () => {
    render(
      <Provider store={store}>
        <Task {...props} />
      </Provider>
    )
  })

  test("should have a tile", () => {
    const title = screen.getByText(props.task.title)
    console.log(title)
  })
})
