import React from 'react';


const PersonalData = () => {
  return (
    <div className="personal-data">
      <div className="personal_data__avatar">
        <div className="rounded-full w-48 h-48 bg-white mx-auto overflow-hidden border-2 border-gray-400">
          <img src="perfil.png" alt="Juan Cahuana" />
        </div>
      </div>
      <div className="flex flex-wrap py-4 text-white text-xl uppercase justify-center font-bold">
        <div className="w-full text-center">Juan Antonio</div>
        <div className="w-full text-center">Cahuana Montes</div>
      </div>
      <div className="py-2 px-1 text-white text-lg text-center font-bold bg-blue-900 rounded-full">
        FrontEnd & Analytics Developer
      </div>
    </div>
  );
};

export default PersonalData;
