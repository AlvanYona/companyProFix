import Image from "next/image";
import GetTeams from "../api/GetTeams";
import { User } from "../types/useTypes";

interface TeamsProps {
  title: string;
}

const Teams = async ({ title }: TeamsProps) => {
  const users = await GetTeams();
  if (!users) return null;
  console.log(users);
  
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-[#66371d]">Our Amazing Team</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => {
          return (
            <div 
              key={user.email} 
              className="w-full p-6 bg-gradient-to-b from-[#a8eeec] to-[#b2b9f0] shadow-xl rounded-3xl 
                        border-t-2 border-[#fdefd7]/60 flex flex-col items-center space-y-5 
                        transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl 
                        hover:shadow-[#66371d]/30"
            >
              <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden 
                              border-4 border-[#fdefd7] shadow-lg transform transition-transform 
                              hover:scale-105 duration-300">
                <Image 
                  src={user.picture.large} 
                  alt={`${user.name.first} ${user.name.last}`} 
                  fill 
                  className="object-cover" 
                />
              </div>

              <div className="text-center text-[#f0e3d0] w-full">
                <h2 className="text-xl md:text-2xl font-bold capitalize mb-2">
                  {`${user.name.first} ${user.name.last}`}
                </h2>
                <div className="w-20 h-1 bg-[#fdefd7]/40 mx-auto mb-3 rounded-full"></div>
                <p className="text-sm md:text-base text-[#fdefd7]/90 mb-1">{user.email}</p>
                <p className="text-xs md:text-sm text-[#fdefd7]/80 mb-1">
                  <span className="inline-block mr-1">📍</span>
                  {user.location.city}, {user.location.country}
                </p>
                <p className="text-xs md:text-sm text-[#fdefd7]/80">
                  <span className="inline-block mr-1">📞</span>
                  {user.phone}
                </p>
              </div>

              <div className="w-full pt-4 mt-2 border-t border-[#fdefd7]/20">
                <p className="bg-[#fdefd7] text-[#66371d] px-5 py-2.5 rounded-xl text-center
                              text-sm md:text-base font-semibold shadow-md 
                              hover:bg-[#f0e3d0] transition-colors duration-300">
                  {title}
                </p> 
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Teams;