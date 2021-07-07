import React,{Component} from 'react';
import '../../css/PrivacyStatement.css'

class PrivacyStatement extends Component{
  render(){ 
    return(
      <div className='privacy_statement'>
        <h4>개인정보 취급방침</h4>
        <pre readOnly>
        가. 수집하는 개인정보 항목 및 수집방법<br></br>
        나. 개인정보의 수집 및 이용목적<br></br>
        다. 수집한 개인정보의 보유 및 이용기간<br></br>
        <br></br>
        <br></br>
        가. 수집하는 개인정보 항목 및 수집방법<br></br>
        본원은 고객님의 온라인상담을 위해 개인정보를 아래와 같이 수집하고 있습니다.<br></br>
        - 이름, 핸드폰, 직업, 나이, 이메일 등 기록<br></br>
        본원은 다음과 같은 방법으로 개인정보를 수집합니다.<br></br>
        - 상담 게시판에 상담 신청 게시글 등록<br></br>
        나. 개인정보의 수집 및 이용목적<br></br>
        본 학원은 수집한 개인정보를 다음의 목적을 위해 활용합니다.<br></br>
        - 과정문의에 대한 학과담당자들의 전화 및 이메일상담<br></br>
        - 신규 서비스(강좌) 개발 및 특화, 이벤트 등 광고성 정보 전달<br></br>
        다. 수집한 개인정보의 보유 및 이용기간<br></br>
        원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당정보를 지체 없이 파기합니다.<br></br>
				
				</pre>
        <div>
          <input type="radio" name='agree' value='false'/>동의하지않습니다.  
          <input type="radio" name='agree' value='true'/>동의합니다.
        </div>
      </div>
    )
  }
}

export default PrivacyStatement