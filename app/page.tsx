import DayState from "@/components/DayState";
import DeleteButton from "@/components/DeleteButton";

export default function Home() {
  const habits = { 
    "Ler": [true, false, true, , false, true, false],
    "Correr": [true, true, , true, false, true, ],
    "Estudar": [false, , true, , false, false, true],
  };
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  return (
    <main className='container relative flex flex-col gap-8 px-4 pt-16'>
      {habits === null ||
        (Object.keys(habits).length === 0 && (
          <h1 className='mt-20 text-4xl font-light text-white font-display text-center'>
            Você não tem hábitos cadastrados
          </h1>
        ))}
              {habits !== null &&
        Object.entries(habits).map(([habit, habitStreak]) => (
          <div key={habit} className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-xl font-light text-white font-sans">
                {habit}
              </span>
              <DeleteButton habit={habit} />
            </div>
              <section className="grid grid-cols-7 bg-neutral-800 rounded-md p-2">
                {weekDays.map((day, index) => (
                  <div key={day} className="flex flex-col last:font-bold">
                    <span className="font-sans text-xs text-white text-center">
                      {day}
                    </span>
                    {/* day state */}
                    <DayState day={habitStreak[index]} />
                  </div>
                ))}
              </section>
          </div>
        ))}
    </main>
  );
}
