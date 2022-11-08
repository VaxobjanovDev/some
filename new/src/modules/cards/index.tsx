import Link from "next/link";
import { useState } from "react";
import { CardsBox } from "./cards.styles";
import { Container } from "../../layout/container";
import { Card } from "../../components/card";
import { Pagination } from "../../components/pagination";
import {CardType, PropsCard} from "../../types/cardType";
import {data} from "../../components/data";

export const Cards = () => {

  const [currentPage, setCurrentPage] = useState(1)

  console.log(data.length)

  const PER_PAGE = 10
  const offset = (currentPage - 1) * PER_PAGE
  const lastPage = Math.ceil(data.length / PER_PAGE)



  const currentData = data.slice(offset, offset + PER_PAGE).map((card) => (
    <Container key={card.id} className={"card-col-3 col-lg-3 col-md-4 col-sm-6 my-2"}>
      <Link href={"/detail"}>
        <Card cardInfo={card} />
      </Link>
    </Container>
  ))

  return (
    <CardsBox>
      <Container className={"container-fluid"}>
        <Container className={"row"}>
          {currentData}
        </Container>
        <Pagination
          maxLength={7}
          lastPage={lastPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Container>
    </CardsBox>
  )
}