import { Countdown, Scountdown } from "styles/components/ui/countdown";

const CountdownStatistic = () => {
 
    const targetDate = new Date('2024-12-31T23:59:59');

    return (
        <div>
            <div style={{ marginBottom: '20px' }}>
                <h1>Day Level</h1>
                <Scountdown targetDate={targetDate} />
            </div>

            <div style={{ marginTop: '20px' }}>
                <h1>Countdown</h1>
                <Countdown targetDate={targetDate}
                 />
            </div>
        </div>
    );
};

export default CountdownStatistic;
