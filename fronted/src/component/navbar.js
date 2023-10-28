import React from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css"

const Navbar = () => {
    const cardata = localStorage.getItem("itemscart")
    console.log("cardata", cardata)


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="#">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABR1BMVEX///8AAADd9f+NsP//1mRmmveQs//B6fT/aWnj/P+Jrv45R2eKrPlonfxIba/Hx8fG7/trgYdTU1OSt/8rNk7/2maIiIjX7vigoKAjJyl65X1vi8lilO3buFa0l0f/3mj5xUX8z1iCouplf7eOnaThsz+TsbqxsbHD2OF2g4jP5e6BjpRlcHSnucEfIiNWX2OtijFbq11y1nWIlp3sYWH2W1vpRUXUQEDJU1POozorUCw0YzZmwGlvXSz+8tmvzf/5wzZkZGTY2NiAazLBokzv7+8SEhLf3998fHydhD7vyV45OTlLS0vuvUOcfCytra1VRyFAMxIkHQpmVSgzKA4WEwmQcijivllsVh5EVXtUapwTIDZKHx/DSEieLy8mCws8WpFiKCgMEhzDOzt8YyLUy7dYaIJRmFNsfp0gPCFQesMrR3m+lzVUoBgYAAAI80lEQVR4nO2d+0PTRhzA27QNRq1laFo6xBSotNRCVZxOJ3OlD6DFURQFZA+nbm7q///z8rhLk/ZyufbSXC7c5yfaRLkPl3t975FEInhy+X4S0G1WOjP4DUzpLG4l3ezvsU5ToFRG/UxH1qkKkCbCz3hYd1knLCD2umhBnSPWaQuEPU8/nUXWqQuAjqMIDg7ay8vtg5ZDscI6ffTYTUTyoKdpqoG28u3Y/pb7spiHJq2elrZZKd2H3xdZp5CSXShyR1XTaafi3VfgSp51Guk4BBptLe2mVHr5BlzjunuTg0UQCKp6QdRUoHgXXOS65W+COhQ8odpy6/Wg1U6rpqFdFlmnkoIOaOuXLUMVNBPHPdUoiaXSCfctBnhIX2suwWTyTc+ViU3W6Zwe0FS0zSxU28N2fkczMxFUNhw3GKAY9izD146ujP6V8ZieWZ/4HUhZ/ZlXoCJ1CJolUzd8a33it19jVTQDhOEdy/Ab54YdV0WDysOn1qcc65ROS2dYrRjlcGcoCCvTmBkuDw1bWhwN09oBFDwG/ba4GabVO+ALs9sWR8O01rvTah2cqum45qE5uNDgQHElnoauEWJsDM9WEJRKcTIsecK7YYJDw85urkLOkZX+wX1PQM87P8F/WtnFjkQ6eyMpzE0ycKnAuBJj+nmv4NXePmIGoeh5+wg51PwRK9AhyLzX7URxEs9/zYY+Il8WvG8nCMruh5d4MrbGFLFJ9J0CWgwr4eQcjiQxh7/dpyxiZ8hYMZItffzdPgG9Jrite77EnHcXMNGubIEzJL/96OL3P/5E3T0K6Jwkb63elNmTeY/KRFCO/rri5ofHj4EitlsB/vVFSk6x52omCxRdJRHUM4/GDT8iH2o3oBpeioKgbpjJfLAShEjjlXHDJ9YVbINhtfUfWLtZ6IYwE50dMjpD65ZrkchC0/DGeNEShhMZytdX2SCHZHhzDRT00Dm/HoqhvBS+GuRcDsPw5rXwzWzCMbwVvpjNdWEoDCcw7G6XQ2N7e7sRvmFRUkJjfn7+OwaGBSk05uaE4SUyfDTKkycf42XojTAUhsJQGPJkSNl/oTRsmQysDzv6j58+nQVrqFS3N2jYpDTUTMDCnVNNM1axBmqolP0eFj8aiFycxNC5NGnZXMV6N1DDGq1gMrk+rhghQ2WT3hCRiREylKr0hhvRNpR8ZvEIqI7/p5EyrFGu1yhuRrym0YtirUqDhGoQo2U4C4ShMBSGwpATQ+xKBb4Nwf4x7CpMzg1fDkbujZ2h/qD+jfWLgeEvPwtDYSgM+TckDQvyaqjUNhFT01XoOG3gdPhHYm3oFX66Z6VQ2UBf9qcP/0isDQteKazSCSbtmA2t4f3j4j5+JTvW0DuCuG1kAVUEFcTdKA1/NdNLbii/Mz/VFV9D8zGlii82gjAEZ1Ng9824DFOykYnFml8xhAWxSGFYDsJw4vGhzto/ZUdNijekCYMfBlKXTmOYeuFo7aDC54c2zx2GklKddh6qHExrMY3h1RfSuOGD720eOg0pZhS5MaRGGApDYXgZDZGtRZwM5aV/HUsmYmjo0WuLj6FXz5uqxY+Uodfo6b9nQ5yGSrW+sNCADH8aflxolPGKETEcZ4KeN2qdEC+GBbKjGFALFDgxJBwBY59T1vOHng7rE0QxopyHktRAJ7prZfE9EsE+xi8ChoWN4tYYxTpoMZXt/vhVj3ujaigpBQT2Y6dIqMvoe6NqOGuEoTAUhsJQGApDYSgMhaEwFIYGCmJw4dhWwNvsGsJwAzXoa8DxYaF8byq27XE/c0OPMX7SEqRYqgAjcKwN8XEaqp1Qm0xWKswm1oamzoPhLFYMZW5bn5xpZBjzrlMYeqz6ApnoWpweguGzn4Y4DCVpakV7p96YYSb75f2ie3tBCIaec09KbUoKXq2FoZgdSSNLQ3oQhpmMMBSGwlAYCkNaw9i3FtkvX/Pud5nFzNA6Ktm1KzQEw8/PbR64DJUpzxnAGIKet3OHAbuet1TwPd8omdyqYhWjPXpSvCIAbrDT3NE2JBwBR3kths+emTisp/EcxVv7nsjiNIhTaaJj6LN3rYp4fc8Y+KV7rA31Ie46Zv+hUkDtTvTYqxhRQ789pLTLS6NgOGOEoTAUhsJQGApDYSgMhaEwJDKcojfNlaFSM94iMoLj9BaJcvqQuaHv6S0kQ2AE3YBOb5l5FGMG8/jRikSxP70lItFENIGc3jLzmDd/p7fMZA8pGkant3gZlocTLZsOQ+P0lvp0sDq9xctwGJdXak5D/teXjhtKI4bUCENhKAyFoTAUhhwZ2hRchpO07ZE2PHQcyuI0VDbrDT/KGL3oGI5zWU5vIYth8Lna5LKc3sI0D40jaGe+s4voHOEixm+yd+dpTkPzFOEBvaG0UUTQGJ7egrrsoo4PoJMY7oO/1YGuqLatn09L9tstKN/ggTqfZbigErX/0nM35tSGOfg46IUvnTaLxsA8Bxp+jz0M2s9w1pAYJvJQpaem1dMTXfClLvgUfos9KJkPw0QTuJzomaiqvZ6jlvEphbwYJmDccsd4Tq2zyk/AV028IC+GezDDjNpmxVnL9H0EeTEc1jZtLV2Ch7Eb4I+c58gwsQiVzHbiG/yEf09QBAzniQ2HtY2zlsG2hJEwnCM3TMAVyWel0ivwo18tw9ywMDeJYQdm3FviWsbTcC5MiA2HtQ3Et5bhzTBx5Bb0r2W8DefDhNzQ7oObENQyXoZb66HSIDdMOF5nu08miDRkA5Fhxz729pBQkDfDxC64u0tUy/BomKhY13e9rvsYXmMjZ5IiM7QGi/ghobehvMZKz0oCkWEil89jX8uJM0zJ56wEL1aJDSfEbZiSV9eYsCTLpE8ppWFKZoT5yzNhGLLk6kwMrbD1hcxcUQa78d9bhuStgR+gG3Q7m4kG2QsrQcQNui8gOHArIobwISUa+ZEBg1hfs1n2klko6BcDnQjYW7+4cZs5X+w+1SRNuh9jA+coQDoyImPf/xeGzVaggvb0XIQI8hmNomI3uLbQZtH/14ZHM7im0EEnP+XWkMBpBtddG2W3ssico1wQ+fc/ivoGkU6wk1QAAAAASUVORK5CYII=" style={{ borderRadius: "50%" }} width="100" height="100" className="d-inline-block align-top" alt="image path not found" />
                    </NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/addquestion">Add Question Answer</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/allquestion">All Question</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}



export default Navbar;
