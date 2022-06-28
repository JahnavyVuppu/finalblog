import React, { Component } from 'react';
import Mailer from './mailer';
class Home extends React.Component{
    render(){
        return(
        <div>
            <nav class="navigation max-width-1 m-auto">
        <div class="nav-left">
            <a href="/">
                <span><img src="./assets/img/mvsr.jpg" width="94px" alt=""/></span>
            </a>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="http://data.mvsrec.edu.in/faculty/profile.php?option=IT&name=KORUKONDA%20RAMYA%20MADHAVI&designation=Assistant+Professor&email=ramyamadhavi_it@mvsrec.edu.in&qualification=M.Tech">About</a></li>
                <li><a href="#footer">Contact</a></li>
            </ul>
        </div>
    </nav>
    <div class="max-width-1 m-auto">
        <hr/>
    </div>
    <div class="post-img" id="home">
        <img src="./assets/img/11.svg" alt=""/>
    </div>
    <div class="m-auto blog-post-content max-width-2 m-auto my-2">
        <h1 class="font1">Ramya Madhavi Blogspot</h1>
        
    </div>

    <div class="max-width-1 m-auto"><hr/></div>
    <div class="home-articles max-width-1 m-auto font2">
        <h2>Courses</h2>
        <div class="row">
        <div class="home-article more-post">
            <div class="home-article-img">
                <img src="./assets/img/dbms.jpg" alt="dbms"/>
            </div>
            <div class="home-article-content font1 center">
                <a href=""><h3>DATABASE MANAGEMENT SYSTEMS</h3></a>
                
                <div>A database management system (DBMS) is a software tool that enables users to manage a database easily. It allows users to access and interact with the underlying data....<a href="dbms.html">Read More</a> </div>
                
            </div>
        </div>
        <div class="home-article more-post">
            <div class="home-article-img">
                <img src="./assets/img/dm.jpeg" alt="data-mining"/>
            </div>
            <div class="home-article-content font1 center">
                <a href=""><h3>DATA-MINING</h3></a>
                
                <div>Data mining (DM) is a computer-assisted process to find patterns in big datasets. Data mining applies intricate algorithms to bring them to the surface so they could be used for solving real-world problems....<a href="dm.html">Read More</a></div>
                
            </div>
        </div>
        <div class="home-article more-post">
            <div class="home-article-img">
                <img src="./assets/img/os.jpg" alt="operating-system"/>
            </div>
            <div class="home-article-content font1 center">
                <a href=""><h3>OPERATING SYSTEM</h3></a>
                
                <div>An Operating System (OS) is the most important program that is first loaded on a computer when you switch on the system. Operating System is system software. The communication between a user and a system takes place with the help of an operating systems....<a href="os.html">Read More</a></div>
                
            </div>
        </div>
        
    </div>
    </div>

    <div id="footer">
        
        
    </div>
        </div>
        );
    }
}
export default Home;