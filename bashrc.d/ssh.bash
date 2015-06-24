base_stack_ssh()
{
    local ssh_command=$1
    shift
    if [[ $# -eq 0 ]]; then
        $ssh_command
    else
        if $ssh_command ssh -At $@
        then
            :
        else
            echo "$@ failed, Trying $@1" 1>&2
            $ssh_command ssh -At $@1
        fi
    fi
}

# alias exssh='base_stack_ssh "ssh -At bastion.somewhere.com"'
#
# _exssh()
# {
#     local cur
#     COMPREPLY=()
#     cur=${COMP_WORDS[COMP_CWORD]}
#
#     COMPREPLY=( $( compgen -W 'internal_host1 internal_host2' -- $cur ) )
# }
#
# complete -F _exssh exssh
