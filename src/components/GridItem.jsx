
export const GridItem = ({title, url}) => {
  return (
    <div className="col-3 col-md-4 col-sm-6 flex-column justify-content-center">
      <img src={ url } alt={ title } className="img-fluid"/>
      <p> { title} </p>
    </div>
  )
}
