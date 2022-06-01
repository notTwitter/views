import twitterIcon from '../../Assets/twitterIconLarger.png'


const LoadingScreen = () => {
  return (
    <>
      <img src={twitterIcon} alt="" style={{height:'100px'}}/>
      <style>
        {`
        #root{
          align-items: center;
        }
        `}
      </style>
    </>
  )
}

export default LoadingScreen