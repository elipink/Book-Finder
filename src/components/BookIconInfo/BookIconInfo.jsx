import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 10px;
    border: 1px solid red;
    width: 190px;
`
const Header = styled.h5`
    display: flex;
    flex-direction: column;
`

function BookIconInfo (props) {
    return(
        <>
        <Container>
            <h3>{props.icons}</h3>
            <Header>
                <span>{props.label}</span>
                <span>{props.info}</span>
            </Header>
        </Container>
        </>
    )
}
export default BookIconInfo;