import React, { useState, useEffect } from 'react';

function Index() {
  const [inputValue, setInputValue] = useState('');
  const [inputValuesArray, setInputValuesArray] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setInputValuesArray((prevArray) => [...prevArray, inputValue]);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value.replace(/[^0-9]/g, ''));
  };

  return (
    <div className='p-4 mx-4'>
      <div className='d-flex gap-3 NavTab'>
        {["Open", "Close", "Boost"].map((item, index) => {
          const tabClassName = index === selectedIndex ? 'ActiveTab' : 'NormalTab';
          return (
            <div
              className={tabClassName}
              onClick={() => setSelectedIndex(index)}
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className='Divider' />
      <div className='container mt-4'>
        <div className='row mx-md-n5'>
          <div className='col-xs-12 col-sm-6 col-md-6'>
            <div className='card-container'>
              <div className='mt-4'>
                <div>Select Asset</div>
                <select
                  className="form-select custom-input mt-2"
                  aria-label="Default select example"
                >
                  <option selected>ETH</option>
                  <option value="1">Rupee</option>
                  <option value="2">WWE</option>
                </select>
                <br />
                <div className='d-flex justify-content-between'>
                  <div >Borrow Amount</div>
                  <div className='HeldAmount'>Max Held Amount : 200</div>
                </div>
                <input
                  type="text"
                  className="form-control custom-input mt-2"
                  placeholder='Enter supply amount'
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </div>
              <br />
              <div className='d-flex justify-content-end mt-4 card-footer'>
                <button type="button" className="btn btn-light mt-4">Execute</button>
              </div>
            </div>
          </div>
          <div className='col-xs-12 col-sm-6 col-md-6'>
            <div className='card-container h-50 mt-1'></div>
            <div className='card-container h-45 mt-4'>
              <h3>Input Values History</h3>
              <ul>
                {inputValuesArray.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;







