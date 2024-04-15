import { Button, Datepicker, Label, TextInput } from "flowbite-react";
import { useState } from "react";

Setting.propTypes = {};

function Setting() {
  const date = new Date();

  const [color, setColor] = useState("");
  const [erroMessage, setErroMessage] = useState({
    title: "",
    date: "",
    email: "",
  });
  const [formData, setFormData] = useState({
    title: "",
    color: "#000000",
    date: date.toISOString().slice(0, 16),
    email: "",
  });
  const handleChangeColor = (e) => {
    setFormData({
      ...formData,
      color: e.target.value,
    });
    setColor(e.target.value);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (formData.date === "" || formData.title === "" || formData.email === "") {
      console.log(formData.date);
      setErroMessage({
        ...erroMessage,
        title: formData.title === "" ? "Title is required" : "",
        email: formData.email === "" ? "Email is required" : "",
      });
    }
    console.log(formData);
  };

  return (
    <div>
      <h1
        style={{
          color: "blue",
          fontSize: "25px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Setting
      </h1>
      <form>
        <div className='flex max-w-md items-center gap-4'>
          <div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='small' value='Title' />
              </div>
              <TextInput
                color={erroMessage.title ? "failure" : ""}
                helperText={
                  erroMessage.title ? (
                    <>
                      <span className='font-medium'>{erroMessage.title}</span>
                    </>
                  ) : (
                    <></>
                  )
                }
                style={{
                  color: `${color ? color : ""}`,
                }}
                id='small'
                type='text'
                sizing='md'
                name='title'
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    title: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='base' value='Email' />
              </div>
              <TextInput
                color={erroMessage.email ? "failure" : ""}
                helperText={
                  erroMessage.email ? (
                    <>
                      <span className='font-medium'>{erroMessage.email}</span>
                    </>
                  ) : (
                    <></>
                  )
                }
                style={{
                  color: `${color ? color : ""}`,
                }}
                id='base'
                type='email'
                sizing='md'
                name='email'
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='large' value='Background color' />
              </div>
              <div className='px-2 py-2 border rounded-lg'>
                <input
                  className='w-full '
                  type='color'
                  id='md '
                  size='50px'
                  onChange={handleChangeColor}
                  name='color'
                />
              </div>
            </div>
            <div>
              <div className='mb-2 block'>
                <Label htmlFor='base' value='Active date' />
              </div>
              <TextInput
                color={erroMessage.date ? "failure" : ""}
                helperText={
                  erroMessage.date ? (
                    <>
                      <span className='font-medium'>{erroMessage.date}</span>
                    </>
                  ) : (
                    <></>
                  )
                }
                type='datetime-local'
                name='date'
                value={date.toISOString().slice(0, 16)}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    date: e.target.value,
                  });
                }}
                id=''
              />
            </div>
          </div>
        </div>
        <Button onClick={handleSave} type='submit' className='mt-3'>
          Save
        </Button>
      </form>
    </div>
  );
}

export default Setting;
