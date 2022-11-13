import {ReactComponent as RightArrow} from '../../../assets/icons/right-arrow.svg' 
import {ReactComponent as LeftArrow} from '../../../assets/icons/left-arrow.svg'

const ProgressControl = (props)=>{
  const {setStep} = props
  return (
    <section className="progress-control-container col col-lg-6 col-sm-12">
          <section className="button-group col col-12" data-phase="address">
            <button className="next" onClick={()=>{setStep("2")}}>
              下一步
              <div className="cursor-point">
                <RightArrow/>
              </div>
            </button>
          </section>
          <section className="button-group col col-12" data-phase="shipping">
            <button className="prev"  onClick={()=>{setStep("1")}}>
              <div className="cursor-point">
                <LeftArrow/>
              </div>
              上一步
            </button>
            <button className="next" onClick={()=>{setStep("3")}}>
              下一步
              <div className="cursor-point">
                <RightArrow/>
              </div>
            </button>
          </section>
          <section className="button-group col col-12" data-phase="credit-card">
            <button className="prev" onClick={()=>{setStep("2")}}>
              <div className="cursor-point">
                <LeftArrow/>
              </div>
              上一步
            </button>
            <button className="next">
              確認下單
            </button>
          </section>
        </section>
  )
}
export default ProgressControl;