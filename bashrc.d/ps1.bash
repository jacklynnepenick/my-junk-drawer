parse_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e "s/* \(.*\)/\1 /"
    if ! [ ${PIPESTATUS[0]} -eq 0 ] ; then
        hg branch 2>/dev/null | sed 's/$/ /'
    fi
}

parse_revid() {
    if ! git branch > /dev/null 2>&1; then
        hg identify -n 2>/dev/null | sed "s/\(.*\)/r\1 /"
    fi
}

export VIRTUAL_ENV_DISABLE_PROMPT='gtfo, i got this'
get_virtualenv_prompt() {
    if type deactivate >/dev/null 2>&1; then
        echo "($(basename "$VIRTUAL_ENV")) "
    fi
}

DARK_GREEN="\[\e[0;32m\]"
GOLDISH="\[\e[0;33m\]"
NORMAL_COLOR="\[\e[0;00m\]"
GREY="\[$(tput setaf 7)\]"
PURPLE="\[$(tput setaf 5)\]"
RED="\[$(tput setaf 1)\]"
TEAL="\[$(tput setaf 6)\]"

extended_ps1() {
    export PS1='$(printf "%$((COLUMNS-1))s\r")'"$TEAL\$(get_virtualenv_prompt)$PURPLE\$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 3) $GREY\$(date +%H:%M:%S) $GOLDISH\$(parse_branch)$PURPLE\$(parse_revid)$DARK_GREEN\w$ $NORMAL_COLOR"
}

normal_ps1() {
    export PS1='$(printf "%$((COLUMNS-1))s\r")'"$TEAL\$(get_virtualenv_prompt)$GOLDISH\$(parse_branch)$PURPLE\$(parse_revid)$DARK_GREEN\w$ $NORMAL_COLOR"
}

normal_ps1
