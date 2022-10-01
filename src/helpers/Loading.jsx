
export const Loading = ({isLoading}) => {
  console.log('-->', isLoading);
  return (
    isLoading && (<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>)
  )
}
