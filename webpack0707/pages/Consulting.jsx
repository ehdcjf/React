import React,{Component} from 'react';
import PrivacyStatement from '../component/consult/PrivacyStatement';
import ConsultingInfo from '../component/consult/ConsultingInfo';
import MainContent from '../component/MainContent';




class Consulting extends Component{
  render(){ 
    return(
      <><div>
          <h3 className='main_content_title'>상담게시판</h3>
          <MainContent>
          <PrivacyStatement/>
          <ConsultingInfo/>
          </MainContent>
      </div>
      </>
    )
  }
}

export default Consulting