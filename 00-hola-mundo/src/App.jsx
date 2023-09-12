import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard';

export function App() {
    const format = (userName) => `@${userName}`
    return(
        <section className="App">
            <TwitterFollowCard formatUserName={format}  initialIsFollowing userName="midudev" name="Miguel Ángel Durán"></TwitterFollowCard>
            <TwitterFollowCard formatUserName={format}  userName="midudev" name="Miguel Ángel Durán"></TwitterFollowCard>     {/* isFollowing true */}
            <TwitterFollowCard formatUserName={format}  userName="pheralb" name="Pablo Hernández"></TwitterFollowCard>
            <TwitterFollowCard formatUserName={format}  userName="elonmusk" name="Elon Musk"></TwitterFollowCard>
       
        </section>
    )
}