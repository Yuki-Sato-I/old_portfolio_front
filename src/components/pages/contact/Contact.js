import React from "react";

// my component
import './Contact.css';

export const Contact = () =>  {
  const send = async () => {
    console.log("sended");
  }
  
  return (
      <div className="section">
        <div className="contact-section">
          <h2>お問い合わせの際はお気軽にご連絡ください</h2>
          <div className="contact-form">
            <p>
              <label htmlFor="name">氏名</label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="email">メールアドレス</label>
              <input type="email" id="email" name="email" />
            </p>
            <p>
              <label htmlFor="content">お問い合わせ内容</label>
              <textarea rows="15" id="content" name="content" />
            </p>
            <p className="submit-btn-p">
              <button id="submit" onClick={ send }>
                送信する
              </button>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Contact;