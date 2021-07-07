import React, { Component } from 'react';
import '../css/Navbar.css'
import { FaFacebook, FaInstagram, FaTwitter ,FaBars,} from 'react-icons/fa'
import NavToggle from './NavToggle'
import {Link} from 'react-router-dom'


class Navbar extends Component {

  constructor(props){
  super(props);

  this.submenuRef = React.createRef();
  
  this.state = {
    showLinks:false,
    
    social: [
      {
        id: 1,
        url: 'https://www.twitter.com',
        icon: <FaTwitter />
      },
      {
        id: 2,
        url: 'https://www.facebook.com',
        icon: <FaFacebook />
      },
      {
        id: 3,
        url: 'https://www.instagram.com',
        icon: <FaInstagram />
      }
    ],

    menu : [
      {
        id:1,
        url:'/company', 
        text:'COMPANY',
        submenu:['회사개요','인사말','연혁','경영철학','CI','오시는길'],
      },
      {
        id:2,
        url:'/business', 
        text:'BUSINESS',
        submenu:['사업안내','사업자 소개','사업문의','견학문의'],
      },
      {
        id:3,
        url:'/rnd', 
        text:'R&D',
        submenu:['종합기술원','연구성과'],

      },
      {
        id:4,
        url:'/', 
        text:'ESG',
        submenu:['환경경영','사회공헌','윤리경영','컴플라이언스','지배구조'],

      },
      {
        id:5,
        url:'/', 
        text:'PR',
        submenu:['보도자료','홍보영상','광고','콜마사랑'],

      },
      {
        id:6,
        url:'/', 
        text:'IR',
        submenu:['재무정보','주식정보','공시정보','보고서','공고사항'],

      },
      {
        id:7,
        url:'/consult/consulting', 
        text:'상담하기',
        submenu:['상담하기','지원하기','자주 묻는 질문'],
      },
    ]
  }

  }
  
  handleToggle = ()=>{ 
    this.setState({showLinks:!this.state.showLinks})
  }


  showContainer = ()=>{ 
    let className =  this.state.showLinks ? 'links-container on':'links-container' ;
    return className; 
  }
 


  render() {
    return (
      <nav>
        <div className = 'nav-center'>
          {/* Logo */}
          <div className = 'nav-header'>
            <h1 className = 'logo'>Logo</h1>
            <NavToggle toggle = {this.handleToggle}/>
          </div>
          
          <div className = {this.showContainer()}>
            <ul className = 'links'>
            {
              this.state.menu.map(item => {
                let { id, url, text } = item
                return (
                  <li key = {id}>
                    <Link to = {url}>{text}</Link>
                  </li>
                )
              })
            }
            </ul>
          </div>
          <ul className = 'social-icons'>
            {
              this.state.social.map(item => {
                let { id, url, icon } = item
                return (
                  <li key = {id}>
                    <a href = {url}>{icon}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar




