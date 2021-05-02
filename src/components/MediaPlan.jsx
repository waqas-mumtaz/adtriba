import React , {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './MediaPlan.css';

const MediaPlan = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [total,setTotal]=useState(0);
  const [values, setValues] = useState({
    sea: 0,
    display:0,
    social:0,
    affiliate:0,
    remarketing: 0
});

const calcTotal = (newValues) => {
  const { sea, display, social, affiliate, remarketing} = newValues;
  const newTotal = parseFloat(sea) + parseFloat(display) + parseFloat(social) + parseFloat(affiliate) + parseFloat (remarketing)
  console.log(newValues)
  setTotal(newTotal)

} 

const checkInput = (e) =>
{
  let value = e.target.value.replace(/[^0-9\.]/g,'');
  if ((e.which !== 46 || value.indexOf('.') !== -1) && (e.which < 48 || e.which > 57)) {
      e.preventDefault();
  }
}

const valueHandler = (e) => {
  let name= e.target.name;
    let value =parseFloat(e.target.value).toFixed(2);
    if(isNaN(value) ){
     value = 0;
    }
    console.log(value)
    const newValues = {
      ...values,
      [name]:  value
  } 
  setValues(newValues)
  // Calling the method to sum the value
  calcTotal(newValues) 

 

}

  return (
    <div className="media-plan-box">
      <div className="inner-wrapper">
        <form>
          {/* media plan field */}
          <div className="grid-container grid-full">
            <div className="grid-item">
            <label htmlFor="Meida Plan"  className="pdb-10">Media Plan</label>
            <input type="text" className="input-control"/>
            </div>
          </div>
          {/* start date  */}
          <div className="grid-container grid-half">
          <div className="grid-item">
            <label htmlFor="Start Date"  className="pdb-10">Start Date</label>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </div>
            {/* end date field */}
            <div className="grid-item">
            <label htmlFor="End Date" className="pdb-10">End Date</label>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
            </div>
            </div>
            {/* form sub headings for fields */}
            <div className="grid-container grid-one-forth sub-heading">
              <p className="grid-item">Channel</p>
              <p className="grid-item">Budget</p>
              <p className="grid-item text-center">Keep Consistent</p>
              <p className="grid-item text-center">Exclude</p>
            </div>
            {/* sea */}
            <div className="grid-container grid-one-forth">
            <div className="grid-item">
                <label htmlFor="sea" className="label-sm">Sea</label>
              </div>
              <div className="grid-item">
                <input type="text" 
                onChange={valueHandler}  
                onKeyPress={checkInput}
                className="input-control input-sm"  
                name="sea"  />
              </div>
              <div className="grid-item">
              <label className="sq-radio">
                <input type="radio" name="sea" /> 
                <span className="checkmark"></span>
              </label>
              </div>
              <div className="grid-item">
              <label className="sq-radio">
                <input type="radio" name="sea" /> 
                <span className="checkmark"></span>
              </label>
              </div>
            </div>
              {/* display */}
              <div className="grid-container grid-one-forth">
              <div className="grid-item">
                <label htmlFor="display"  className="label-sm">Display</label>
              </div>
              <div className="grid-item">
                <input type="text"
                  onChange={valueHandler}  
                  onKeyPress={checkInput}  
                  className="input-control input-sm" 
                  name="display"/>
              </div>
              <div className="grid-item">
              <label className="sq-radio">
                <input type="radio" name="display" /> 
                <span className="checkmark"></span>
              </label>
              </div>
              <div className="grid-item">
              <label className="sq-radio">
                <input type="radio" name="display" /> 
                <span className="checkmark"></span>
              </label>
              </div>
            </div>
            {/* Social */}
            <div className="grid-container grid-one-forth">
            <div className="grid-item">
                <label htmlFor="social"  className="label-sm" >Social</label>
              </div>
              <div className="grid-item">
                <input type="text"
                  onChange={valueHandler}  
                  onKeyPress={checkInput} 
                  className="input-control input-sm" 
                  name="social"/>
              </div>
              <div className="grid-item">
              <label className="sq-radio">
                <input type="radio" name="social" /> 
                <span className="checkmark"></span>
              </label>
              </div>
              <div className="grid-item">
              <label className="sq-radio">
                <input type="radio" name="social" /> 
                <span className="checkmark"></span>
              </label>
              </div>
            </div>
            {/* Affiliate */}
            <div className="grid-container grid-one-forth">
            <div className="grid-item">
                <label htmlFor="affiliate" className="label-sm">Affiliate</label>
              </div>
              <div className="grid-item">
                <input type="text" 
                  onChange={valueHandler}  
                  onKeyPress={checkInput} 
                  className="input-control input-sm"  
                  name="affiliate"/>
              </div>
              <div className="grid-item">
              <label className="sq-radio">
                <input type="radio" name="affiliate" /> 
                <span className="checkmark"></span>
              </label>
              </div>
              <div className="grid-item">
              <label className="sq-radio">
                <input type="radio" name="affiliate" /> 
                <span className="checkmark"></span>
              </label>
              </div>
            </div>
            {/* remarketing */}
            <div className="grid-container grid-one-forth">
            <div className="grid-item">
                <label htmlFor="remarketing" className="label-sm">Remarketing</label>
              </div>
              <div className="grid-item">
                <input type="text"   
                onChange={valueHandler}  
                onKeyPress={checkInput}
                className="input-control input-sm"  
                name="remarketing"/>
              </div>
              <div className="grid-item">
              <label className="sq-radio">
                <input type="radio" name="remarketing" /> 
                <span className="checkmark"></span>
              </label>
              </div>
              <div className="grid-item">
              <label className="sq-radio">
                <input type="radio" name="remarketing" /> 
                <span className="checkmark"></span>
              </label>
              </div>
            </div>
            <div className="total">
              {total !== 0 && <p>Total : ${total}</p>}
            </div>
            <div className="btn-wrapper">
              <button>Copy Plan</button>
              <button>Save Plan</button>
            </div>
        </form>
      </div>
    </div>
  )
}

export default MediaPlan
