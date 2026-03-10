import * as Card from './Components';
import { Main } from './Components';

const CardPost = () => {
    return (
        <>
            <Card.Container>
                <Card.Header h2="My Fist Post">
                </Card.Header>
                <Main username="@John Doe" content="Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat." createdAt="2023-10-01" />
            </Card.Container>
        </>
    )
}

export default CardPost;