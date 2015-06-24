# Overrides
alias thg="thg >/dev/null 2>&1 &"
alias gitg="gitg >/dev/null 2>&1 &"
alias gitk="gitg"

# Conveniences
cdfix() {
    cd $(pwd)$@
}
alias chefspec="/opt/chefdk/embedded/bin/rspec"
alias sbash="source ~/.bashrc"
alias sl=ls
alias v='view -'
kitchen_dbag() {
    if [ $2 ]; then
        local dbag=$1
        local dbagitem=$2
    else
        local dbag=romefe
        local dbagitem=${1:-keys}
    fi
    knife solo data bag edit $dbag $dbagitem --secret-file test/integration/default/encrypted_data_bag_secret --data-bag-path test/integration/default/data_bags
}
alias delete_stupid_symlinks="while true; do rm /home/jwpenick/cookbooks/datadog-cp/.chef/data_bags/real_data_bags; rm /home/jwpenick/cookbooks/datadog-cp/.chef/.chef; sleep 0.5; done"

# Pointless
alias plz='sudo'
alias imdabes="echo No\ you\'re\ not"
