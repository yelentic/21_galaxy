import React, { Component } from 'react';
import './Navbar.css'

export default class Navbar extends Component {
    render() {
      return (
        <nav class="navbar-default navbar open">
            <div class="container">
                <div class="navbar-header">
                    <div class="navbar-brand">
                        <a href="/"></a>
                    </div> 
                    <div class="navbar-right navbar-collapse collapse" id="collapse-menu" style="height: 1px;">
                        <ul id="menu-menu-principal-fr" class="nav navbar-nav">
                            <li>
                                <a href="/">Test1</a>
                            </li>
                            <li>
                                <a href="/">Test2</a>
                            </li>
                            <li>
                                <a href="/">Test3</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        
      )
    }
  }
  