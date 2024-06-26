import React from 'react';
import AuthForm from './modules/auth/Index';
import { useAuthStore } from './modules/auth/auth.store';
import Tasks from './modules/tasks';


function App() {
  const { userId } = useAuthStore();
  return (
    <div className="">
      <div className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1499123785106-343e69e68db1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1748&q=80")'
      }}>
        {
          userId ? <Tasks /> : <AuthForm />
        }
      </div>
    </div>
  );
}

export default App;
