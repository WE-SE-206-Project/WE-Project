import React from 'react'
import '../components/css/services.css';
class Services extends React.Component {
    render () {
        return (
            <div>
                  {/* <!-- Services section --> */}
    <section id="services">
        {/* <!-- title --> */}

        <div id="title">
            <div class="title-text">
                <h1>Services</h1>
            </div>
            <div class="title-underline"></div>
        </div>
        {/* <!--end of title --> */}
        <div class="services-container">
        {/* <!-- article --> */}

        <article class="services-item service-item-black">
            <div class="front-text">
                <i class="fa fa-cogs"></i>
                <h1>Web DEvelopment</h1>
            </div>
            <div class="back-text">
                <h1>Web DEvelopment</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos harum repudiandae,
                    numquam natus excepturi!</p>
                <button type="button">Read more</button>
            </div>
        </article>
        {/* <!-- end of article --> */}

        {/* <!-- article --> */}

        <article class="services-item service-item-white">
            <div class="front-text">
                <i class="fa fa-pen-square"></i>
                <h1>Design and Branding</h1>
            </div>
            <div class="back-text">
                <h1>Design and Branding</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos harum repudiandae,
                    numquam natus excepturi!</p>
                <button type="button">Read more</button>
            </div>
        
        </article>

        {/* <!-- end of article -->
        <!-- article --> */}

        <article class="services-item service-item-black">
            <div class="front-text">
                <i class="fa fa-chart-pie"></i>
                <h1>Analytics</h1>
            </div>
            <div class="back-text">
                <h1>Analytics</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos harum repudiandae,
                    numquam natus excepturi!</p>
                <button type="button">Read more</button>
            </div>
        </article>

        {/* <!-- end of article -->
        <!-- article --> */}

        <article class="services-item service-item-white">
            <div class="front-text">
                <i class="fa fa-chart-line"></i>
                <h1>Ceo and Smm</h1>
            </div>
            <div class="back-text">
                <h1>Ceo and Smm</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dignissimos harum repudiandae,
                    numquam natus excepturi!</p>
                <button type="button">Read more</button>
            </div>
        </article>

    </div>
        {/* <!-- end of article --> */}
    </section>
    {/* <!-- End of Services section --> */}
            </div>
        )
    }
}

export default Services
