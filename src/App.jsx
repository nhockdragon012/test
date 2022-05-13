import {images} from './assets'
import './app.scss'
function App() {
  return (
    <div className="App">
   <div class="container">
        <div class="menu-wrapper">
            <ul class="list-menu">
                <li class="menu__item active">Home</li>
                <li class="menu__item">Services</li>
                <li class="menu__item">News</li>
                <li class="menu__item">Blog</li>
                <li class="menu__item">Contact</li>
            </ul>
        </div>
        <section class="content-wrapper">
            <div class="logo-wrapper">
                <img src={images.logo} alt=""></img>
            </div>
            <div class="section-1--wrapper">
                <h4>Lorem ipsum dolor sit amet ?</h4>
                <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
            </div>
            <div class="section-2--wrapper">
                <div class="row">
                    <div class="col-3">
                        <h4>loren ipsum dolor sit amet</h4> 
                        <img src={images.svg1} alt=""></img>
                        <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquamullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p></div>
                    <div class="col-3">
                        <h4>loren ipsum dolor sit amet</h4> 
                        <img src={images.svg2} alt=""></img>
                        <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquamullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p></div>
                    <div class="col-3">
                        <h4>loren ipsum dolor sit amet</h4> 
                        <img src={images.svg3} alt=""></img>
                        <p class="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquamullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p></div>
                </div>
            </div>
        </section>
    </div>
    </div>
  );
}

export default App;
