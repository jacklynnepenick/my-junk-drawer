source $VIMRUNTIME/default_vimrc
set encoding=utf-8

set nocompatible
set autoindent

" Remove any trailing whitespace that is in the file
autocmd BufRead,BufWrite * if ! &bin | silent! %s/\s\+$//ge | endif

" Restore cursor position to where it was before
augroup JumpCursorOnEdit
   au!
   autocmd BufReadPost *
            \ if expand("<afile>:p:h") !=? $TEMP |
            \   if line("'\"") > 1 && line("'\"") <= line("$") |
            \     let JumpCursorOnEdit_foo = line("'\"") |
            \     let b:doopenfold = 1 |
            \     if (foldlevel(JumpCursorOnEdit_foo) > foldlevel(JumpCursorOnEdit_foo - 1)) |
            \        let JumpCursorOnEdit_foo = JumpCursorOnEdit_foo - 1 |
            \        let b:doopenfold = 2 |
            \     endif |
            \     exe JumpCursorOnEdit_foo |
            \   endif |
            \ endif
   " Need to postpone using "zv" until after reading the modelines.
   autocmd BufWinEnter *
            \ if exists("b:doopenfold") |
            \   exe "normal zv" |
            \   if(b:doopenfold > 1) |
            \       exe  "+".1 |
            \   endif |
            \   unlet b:doopenfold |
            \ endif


function! s:DiffWithSaved()
  let filetype=&ft
  diffthis
  vnew | r # | normal! 1Gdd
  diffthis
  exe "setlocal bt=nofile bh=wipe nobl noswf ro ft=" . filetype
endfunction
com! DiffSaved call s:DiffWithSaved()


set number
set expandtab
set smarttab
set shiftwidth=4
set tabstop=4
set softtabstop=4

autocmd FileType ruby setlocal shiftwidth=2
autocmd FileType ruby setlocal tabstop=2
autocmd FileType ruby setlocal softtabstop=2

autocmd FileType javascript setlocal shiftwidth=2
autocmd FileType javascript setlocal tabstop=2
autocmd FileType javascript setlocal softtabstop=2

autocmd FileType yaml setlocal shiftwidth=2
autocmd FileType yaml setlocal tabstop=2
autocmd FileType yaml setlocal softtabstop=2

autocmd FileType eruby setlocal shiftwidth=2
autocmd FileType eruby setlocal tabstop=2
autocmd FileType eruby setlocal softtabstop=2

autocmd FileType make setlocal noexpandtab

nnoremap <silent> <A-Up> :wincmd k<CR>
nnoremap <silent> <A-Down> :wincmd j<CR>
nnoremap <silent> <A-Left> :wincmd h<CR>
nnoremap <silent> <A-Right> :wincmd l<CR>

inoremap jj <Esc>
inoremap kk <Esc>

inoremap :wq <Esc>:wq

nnoremap D d$
nnoremap Y y$
nnoremap ; :

cnoremap WQ wq
cnoremap wQ wq
cnoremap Wq wq
cnoremap W<Enter> w<Enter>
cnoremap W!<Enter> w!<Enter>
cnoremap Q<Enter> q<Enter>
cnoremap Q!<Enter> q!<Enter>

set hlsearch

" Tell vim to remember certain things when we exit
"  '10  :  marks will be remembered for up to 10 previously edited files
"  "100 :  will save up to 100 lines for each register
"  :20  :  up to 20 lines of command-line history will be remembered
"  %    :  saves and restores the buffer list
"  n... :  where to save the viminfo files
set viminfo='10,\"100,:20,%,n~/.viminfo
