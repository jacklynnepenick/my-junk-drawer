.1()
{
    cd ../$@
}
export -f .1

.2()
{
    cd ../../$@
}
export -f .2

.3()
{
    cd ../../../$@
}
export -f .3

.4()
{
    cd ../../../../$@
}
export -f .4

.5()
{
    cd ../../../../../$@
}
export -f .5

.6()
{
    cd ../../../../../../$@
}
export -f .6

alias ..=".1"
alias ...=".2"
alias ....=".3"

alias .1="1."
alias .2="2."
alias .3="3."
alias .4="4."
alias .5="5."
alias .6="6."

alias back="cd -"
alias b-="back"

last_path_element()
{
    echo "$@" | rev | cut -d/ -f1 | rev
}
export -f last_path_element

if .1 > /dev/null 2>&1; then
    back > /dev/null 2>&1
else
    source ~/.bashrc.d/directory_traversing.bash
fi
