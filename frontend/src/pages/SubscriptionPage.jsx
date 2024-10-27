import React from 'react'

export const SubscriptionPage = () => {

  const plans = [
    { name: 'Basic', price: '$10/month' },
    { name: 'Standard', price: '$20/month' },
    { name: 'Premium', price: '$30/month' },
  ];

  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'end' }}>
        <div>
          <h1 style={{ color: 'white', marginLeft: '10vw', marginTop: '5vh', fontFamily: 'Poppins' }}> Choose Your Plan </h1>
          <h5 style={{ color: 'white', marginLeft: '10vw', marginTop: '0vh', fontFamily: 'Poppins', fontWeight: '200' }}>  🚀 Get 15 days free trial </h5>
          <h4 style={{ color: 'white', marginLeft: '10vw', marginTop: '1vh', fontFamily: 'Poppins', fontWeight: '400' }}> Find the Perfect Plan to Power Up Your Journey! </h4>
        </div>

        <div className='trapezium'>
          <h1 style={{ color: 'white', fontFamily: 'Poppins', marginTop: '4vh' }}> FitGenius </h1>
        </div>
      </div>

      <div className="subscription-container">
        <div className="plan-card card_1">
          <h3 style={{ color: 'white', fontFamily: 'Poppins', background: '#0092ca' }}> Basic </h3>
          <h1 className="price" style={{ color: 'white', fontFamily: 'Poppins', fontSize: '2.5vw', background: '#0092ca' }}> $ 10 / month </h1>

          <ul>
            <li>Lorem ipsum dolor sit amet, okok</li>
            <li>Lorem ipsum dolor sit amet, okok</li>
            <li>Lorem ipsum dolor sit amet, okok</li>
          </ul>

          <button className="plan-button">Get Plan</button>
        </div>

        <div className="plan-card card_2">
          <h3 style={{ color: 'white', fontFamily: 'Poppins', background: '#118a7e' }}> Standard </h3>
          <h1 className="price" style={{ color: 'white', fontFamily: 'Poppins', fontSize: '2.5vw', background: '#118a7e' }}> $ 20 / month </h1>

          <ul>
            <li>Lorem ipsum dolor sit amet, okok</li>
            <li>Lorem ipsum dolor sit amet, okok</li>
            <li>Lorem ipsum dolor sit amet, okok</li>
          </ul>

          <button className="plan-button">Get Plan</button>
        </div>

        <div className="plan-card card_3">
          <h3 style={{ color: 'white', fontFamily: 'Poppins', background: '#ff6f3c' }}> Premium </h3>
          <h1 className="price" style={{ color: 'white', fontFamily: 'Poppins', fontSize: '2.5vw', background: '#ff6f3c' }}> $ 30 / month </h1>

          <ul>
            <li>Lorem ipsum dolor sit amet, okok</li>
            <li>Lorem ipsum dolor sit amet, okok</li>
            <li>Lorem ipsum dolor sit amet, okok</li>
          </ul>

          <button className="plan-button">Get Plan</button>
        </div>
      </div>
    </div>
  )
}
