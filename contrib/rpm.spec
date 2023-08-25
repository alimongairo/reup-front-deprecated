%global __python python3.11.4
%define __prefix /usr/local

# Turn off the brp-python-bytecompile script

Name: %{_name}
Version: %{_version}
Release: %{_release}%{?dist}
Group: Internet
Summary: %{_description}
License: %{_license}
URL: %{_url}

#Autoreq: 0

Source0: %{_tarballname}.tar
Source1: %{_tarballname}.tar

BuildRequires: nodejs == 2:16.20.2
Requires: nodejs == 2:16.20.2


%description
%{_description}

%prep
%setup -qc
%setup -T -D -qa 1

%install
ls contrib
%{__install} -D -m 755 contrib/reup-frontend.service %{buildroot}/%{_unitdir}/reup-frontend.service
%{__mkdir_p} %{buildroot}/usr/local/etc/reup-frontend

# logs
%{__mkdir_p} %{buildroot}/var/log/reup-frontend/
%{__mkdir_p} %{buildroot}/var/lib/reup-frontend/
%{__mkdir_p} %{buildroot}/var/run/reup-frontend/
%{__mkdir_p} %{buildroot}/var/www/reup-frontend/
%{__mkdir_p} %{buildroot}/usr/local/reup-frontend/
%{__mkdir_p} %{buildroot}/home/reup
#copy SRC to local directory
ls
cp -r ./* %{buildroot}/usr/local/reup-frontend/

%pre
getent group reup >/dev/null || groupadd -r reup
getent passwd reup >/dev/null || \
    useradd -r -g reup -d /home/reup -s /sbin/nologin \
    -c "this account to run reup applications" reup



%clean
%{__rm} -rf %{buildroot}

%files
%{__prefix}/%{name}
%{__prefix}/etc/%{name}/
%{_unitdir}/reup-frontend.service

%attr(-, reup, reup) /var/log/reup-frontend
%attr(-, reup, reup) /usr/local/reup-frontend
%attr(-, reup, reup) /var/lib/reup-frontend
%attr(-, reup, reup) /var/run/reup-frontend
%attr(-, reup, reup) /var/www/reup-frontend
%attr(-, reup, reup) /home/reup