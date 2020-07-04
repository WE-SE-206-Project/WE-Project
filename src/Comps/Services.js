import React from 'react'

export default function Services() {
  return (
    <div>
      <section id="services">
        <div id="title">
          <div class="title-text">
            <h1>Services</h1>
          </div>
          <div class="title-underline"></div>
        </div>
        <div class="services-container">

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
      </section>
    </div>
  )
}
