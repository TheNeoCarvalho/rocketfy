import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 280px;
  opacity: ${ props => props.done ? 0.6 : 1 }

    & + div {
        border-left: 1px solid rgba(0,0,0,0.05)
    }

    header {
        display: flex;
        justify-content: space-between;
        height: 40px;

        h2 {
            font-weight: 500;
            font-size: 42px;
            padding: 0 10px;

        }
        button {
            width: 40px;
            height: 40px;
            border-radius: 18px;
            background: #715;
            border: 0;
            cursor: pointer;
        }
    }
    ul {
        margin-top: 30px;
    }
`;
