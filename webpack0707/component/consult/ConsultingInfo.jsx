import React,{Component} from 'react';
import '../../css/ConsultingInfo.css'


class ConsultingInfo extends Component{
  render(){ 
    return(
      <>
      <div className='consulting_info'>

      <h4>상담정보</h4>
      <div>
        <table>
          <tbody>
          <tr>
            <td>이름*</td>
            <td><input type="text" /></td>
          </tr>
          <tr>
            <td>성별*</td>
            <td>
              <input type="radio" name='gender' value='male' /> 남
              <input type="radio" name='gender' value='female' /> 여
            </td>
          </tr>
          <tr>
            <td>나이*</td>
            <td><input type="text" /> 세</td>
          </tr>
          <tr>
            <td>이메일*</td>
            <td>
            <input type="text"/>@ 
            <input type="text" />
            <select name="" id="">
            <option value="naver.com">naver.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="daum.net">daum.net</option>
            <option value="nate.com">nate.com</option>
            <option value="hatmail.com">hatmail.com</option>
            <option value="gmail.com">gmail.com</option>
            <option value="korea.com">korea.com</option>
            <option value="kornet.net">kornet.net</option>
            <option value="dreamwiz.com">dreamwiz.com</option>
            <option value="hanafos.com">hanafos.com</option>
            <option value="intizen.com">intizen.com</option>
            <option value="man.com">man.com</option>
            <option value="paran.com">paran.com</option>
            <option value="sayclub.com">sayclub.com</option>
            <option value="yahoo.com">yahoo.com</option>
            </select> 
            </td>
          </tr>
          <tr>
            <td>전화번호*</td>
            <td>
              <input type="number" name="" id="" />-<input type="number" name="" id="" />-<input type="number" name="" id="" />
            </td>
          </tr>
          <tr>
            <td>상담내용</td>
            <td><textarea name="" id="" cols="30" rows="10"></textarea></td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className='consulting_info_btn_box'>
        <button>상담신청하기</button>
        <button>취소</button>
      </div>
      </div>
      </>
    )
  }
}

export default ConsultingInfo