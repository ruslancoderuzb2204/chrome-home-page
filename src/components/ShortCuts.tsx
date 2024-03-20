"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Popover from '@mui/material/Popover';
import { useRouter } from 'next/navigation';

interface Shortcut {
  id: string;
  name: string;
  url: string;
}

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [url, setUrl] = React.useState('');
  const [shortcuts, setShortcuts] = React.useState<Shortcut[]>([]);
  const [popoverId, setPopoverId] = React.useState<string | null>(null);
  const [popoverAnchor, setPopoverAnchor] = React.useState<HTMLElement | null>(null);

  // Function to handle opening the dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Function to handle closing the dialog
  const handleClose = () => {
    setOpen(false);
  };

  // Function to handle changes in the name input field
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // Function to handle changes in the URL input field
  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) return;

    if (name && url) {
      if (!name) return;

      const newShortcut: Shortcut = {
        id: popoverId || Math.random().toString(36).substr(2, 9),
        name,
        url
      };

      if (popoverId) {
        const updatedShortcuts = shortcuts.map(shortcut =>
          shortcut.id === popoverId ? newShortcut : shortcut
        );
        setShortcuts(updatedShortcuts);
        localStorage.setItem('shortcuts', JSON.stringify(updatedShortcuts));
      } else {
        const updatedShortcuts = [...shortcuts, newShortcut];
        setShortcuts(updatedShortcuts);
        localStorage.setItem('shortcuts', JSON.stringify(updatedShortcuts));
      }
    }

    setName('');
    setUrl('');
    handleClose();
  };

  // Function to handle editing a shortcut
  const handleEditShortcut = (id: string, event: React.MouseEvent<HTMLButtonElement>) => {
    const editedShortcut = shortcuts.find(shortcut => shortcut.id === id);
    if (editedShortcut) {
      setName(editedShortcut.name);
      setUrl(editedShortcut.url);
      setPopoverId(id);
      setPopoverAnchor(event.currentTarget);
      setOpen(true);
    }
  };

  // Function to handle removing a shortcut
  const handleRemoveShortcut = (id: string) => {
    const updatedShortcuts = shortcuts.filter(shortcut => shortcut.id !== id);
    setShortcuts(updatedShortcuts);
    localStorage.setItem('shortcuts', JSON.stringify(updatedShortcuts));
  };
const router = useRouter()
  // Function to check if the form is valid
  const isFormValid = name.trim() !== '' && url.trim() !== '';
const moveShortCut = (url:string)=>{
  router.push(`https://${url}`)
}
  return (
    <React.Fragment>
      {/* "Add shortcut" button */}
      <div className='flex gap-2 justify-center items-center flex-wrap w-[680px]'>
        <div className='flex  gap-2'>
          {shortcuts  &&
            shortcuts.map((shortcut) => (
              <div key={shortcut.id} className="border w-40 h-32 rounded p-4 flex items-center flex-col">
                <div  onClick={()=>moveShortCut(shortcut.url)} >
                <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full text-2xl text-black  ">
                  <p>{shortcut.name[0]}</p>
                </div>
                <p className=' text-xl text-center text-white'>{shortcut.name.length > 9 ? shortcut.name.slice(0, 9) + "..." : shortcut.name}</p>
                </div>
                <div className="flex gap-x-2 ">
                  <Button onClick={(e) => handleEditShortcut(shortcut.id, e)}>Edit</Button>
                  <Button onClick={() => handleRemoveShortcut(shortcut.id)}>Remove</Button>
                </div>
              </div>
            ))
          }
        </div>
        <Button variant='contained'  className='w-40 h-32 bg-slate-400' onClick={handleClickOpen}>
          <div className='flex flex-col justify-center items-center'>
            <div className="flex items-center justify-center  w-12 h-12 rounded-full text-2xl text-black">
              <p>+</p>
            </div>
            <p className='mt-2 text-sm'>Add shortcut</p>
          </div>
        </Button>
      </div>

      {/* Dialog for adding/editing a shortcut */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: handleSubmit,
        }}
      >
        <DialogTitle>{popoverId ? 'Edit shortcut' : 'Add shortcut'}</DialogTitle>
        <DialogContent>
          {/* Name input field */}
          <label className='text-sm' htmlFor="name">Name</label>
          <TextField
            className='bg-[#dbd8d8] rounded-t-lg mb-4'
            autoFocus
            required
            margin="dense"
            id="name"
            name="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={handleNameChange}
          />
          {/* URL input field */}
          <label className='text-sm' htmlFor="url">URL</label>
          <TextField
            className='bg-[#dbd8d8] rounded-t-lg '
            autoFocus
            required
            margin="dense"
            id="url"
            name="URL"
            type="text"
            fullWidth
            variant="standard"
            value={url}
            onChange={handleUrlChange}
          />
        </DialogContent>
        <DialogActions>
          {/* Cancel button */}
          <Button className='rounded-full text-xs font-semibold' variant='outlined' onClick={handleClose}>Cancel</Button>
          {/* Done button */}
          <Button
            disabled={!isFormValid}
            variant="contained"
            className={`rounded-full text-xs font-semibold`}
            type="submit"
          >
            {popoverId ? 'Save' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>

     
    </React.Fragment>
  );
}
