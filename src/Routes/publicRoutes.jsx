import Home from '../home';

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <Routers>
                <Router path="/" elementent={<Home/>} />
                <Router></Router>
            </Routers>
        </BrowserRouter>
    )
}