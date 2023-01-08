import { Container, Card } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import incomesImg from '../../assets/incomes.svg'
import outcomesImg from '../../assets/outcomes.svg'
import totalImg from '../../assets/total.svg'

interface summaryProps {
  summary: {
    deposits: number,
    withdraws: number,
    total: number,
  }
}

export function SummarySlider({ summary }: summaryProps) {
  return (
      <Container>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          loopFillGroupWithBlank={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Card>
              <header>
                <p>Entradas</p>
                <img src={incomesImg} alt="Entradas" />
              </header>
              <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(summary.deposits)}</strong>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card>
              <header>
                <p>Saídas</p>
                <img src={outcomesImg} alt="Saídas" />
              </header>
              <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(summary.withdraws)}</strong>
            </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className='total-card'>
              <header>
                <p>Total</p>
                <img src={totalImg} alt="Total" />
              </header>
              <strong>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(summary.total)}</strong>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Container>
    );
}