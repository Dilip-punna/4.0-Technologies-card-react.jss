// Write your code here.
import './index.css'

const Technology = props => {
  const {user} = props
  const {title, description, imgUrl, className} = user

  return (
    <li className={`${className} card`}>
      <h1>{title}</h1>
      <p>{description} </p>
      <div className="img-container">
        <img src={imgUrl} className="card-img" alt={title} />
      </div>
    </li>
  )
}
export default Technology
