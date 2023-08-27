import { useState } from "react";

/**
 * `Formulário para entrada de usuários.`
 */
export default function LoginForm() {
  const [email, setEmail] = useState('');
  const handleEmail = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setEmail(target.value);
  }

  const [password, setPassword] = useState('');
  const handlePassword = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setPassword(target.value);
  }

  const formSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
  }

  return <>
    <form
      className="flex flex-col w-full justify-center items-center gap-[30px] max-w-[500px] sm:p-[40px] rounded-[40px]"
    >
      <fieldset className="w-full flex items-center justify-center flex-col gap-[10px]">
        <h1 className="sm:text-[1.2rem] text-gray-900">Entre no <strong>Post</strong> in</h1>

        <label htmlFor="email"
          className="flex flex-col gap-[6px] w-full max-w-[400px]">
          E-mail
          <input
            type="email" name="email" id="email" placeholder="user@postin.com" autoComplete="email" required
            value={email}
            onChange={handleEmail}
            className="w-full h-[50px] p-[20px] border-gray-900 border-[3px] rounded-full bg-transparent"
          />
        </label>

        <label htmlFor="password"
          className="flex flex-col gap-[6px] w-full max-w-[400px]">
          Senha
          <input
            type="password" name="password" id="password" placeholder="************" autoComplete="password" required
            value={password}
            onChange={handlePassword}
            className="w-full h-[50px] p-[20px] border-gray-900 border-[3px] rounded-full bg-transparent"
          />
        </label>
      </fieldset>

      <button type="submit" onClick={formSubmit}
        className="bg-gray-900 max-w-[400px] w-full text-white h-[50px] rounded-full hover:bg-gray-800 transition">
        Entrar
      </button>
    </form>
  </>
}