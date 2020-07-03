import React from 'react'
import Header from '../components/header/header';
import Services from '../components/services';
import Team from './team/team';
import Footer from './footer/footer';
class Landing extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Services />
                <Team />
                <Footer />
            </div>

        )
    }
}

export default Landing;
