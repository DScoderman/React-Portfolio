import { Link } from "react-router-dom"

const HeaderComponent = () => {
    return (
        <header> <nav>
           
            <ul class="nav nav-pills">
  <li role="presentation" class="active"><a href="/">Home</a></li>
  <li role="presentation"><a href="/Projects">Projects</a></li>
  <li role="presentation"><a href="/MeInfo">about Me</a></li>
  <li role="presentation"><a href="/ContactMe">Contact Me</a></li>
  <li role="presentation"><a href="/Resume">Resume</a></li>
</ul>
           
        </nav></header>
    )
}

export default HeaderComponent