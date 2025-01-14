const submitButton = document.getElementById("btnAddHero");
const editButton = document.getElementById("btnEditHero");
const editTypeButton = document.getElementById("btnEditType");
const submitButtonType = document.getElementById("btnAddType");

if (submitButton) {
  submitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.getElementById("formAddHero");

    const isValid = form.checkValidity();

    if (isValid) {
      confirm({
        text: "Tambah Hero baru ?",
        icon: "question",
        titleConfirm: "Hero sedang ditambahkan",
        callback: () => {
          form.submit();
        },
      });
    } else {
      confirm({
        text: "Pastikan semuanya telah terisi",
        icon: "error",
        showCancelButton: false,
        showResult: false,
      });
      form.reportValidity();
    }
  });
}
if (editTypeButton) {
  editTypeButton.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.getElementById("formEditType");

    const isValid = form.checkValidity();

    if (isValid) {
      confirm({
        text: "Edit Tipe?",
        icon: "question",
        titleConfirm: "Tipe sedang diubah",
        callback: () => {
          form.submit();
        },
      });
    } else {
      confirm({
        text: "Pastikan semuanya telah terisi",
        icon: "error",
        showCancelButton: false,
        showResult: false,
      });
      form.reportValidity();
    }
  });
}
if (editButton) {
  editButton.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.getElementById("formEditHero");

    const isValid = form.checkValidity();

    if (isValid) {
      confirm({
        text: "Ubah Hero  ?",
        icon: "question",
        titleConfirm: "Hero sedang diubah",
        callback: () => {
          form.submit();
        },
      });
    } else {
      confirm({
        text: "Pastikan semuanya telah terisi",
        icon: "error",
        showCancelButton: false,
        showResult: false,
      });
      form.reportValidity();
    }
  });
}
if (submitButtonType) {
  submitButtonType.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.getElementById("formAddType");
    const isValid = form.checkValidity();

    if (isValid) {
      confirm({
        text: "Tambah tipe baru ?",
        icon: "question",
        titleConfirm: "Tipe sedang ditambahkan",
        callback: () => {
          form.submit();
        },
      });
    } else {
      confirm({
        text: "Pastikan semuanya telah terisi",
        icon: "error",
        showCancelButton: false,
        showResult: false,
      });
      form.reportValidity();
    }
  });
}

function deleteHero(id) {
  confirm({
    text: "Apakah Anda yakin ingin menghapus data ?",
    icon: "question",
    titleConfirm: "Hero berhasil dihapus",
    callback: () => {
      const form = document.getElementById(`delete-hero-${id}`);
      form.submit();
    },
  });
}
function deleteType(id) {
  confirm({
    text: "Apakah Anda yakin ingin menghapus tipe ?",
    icon: "question",
    titleConfirm: "Tipe berhasil dihapus",
    callback: () => {
      const form = document.getElementById(`delete-type-${id}`);
      form.submit();
    },
  });
}

const editSubmitButton = document.getElementById("editBtnSubmit");
if (editSubmitButton) {
  editSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();

    const form = document.getElementById("editFormProject");
    const isDateValid =
      new Date(form.endDate.value) > new Date(form.startDate.value);

    if (isDateValid) {
      editProject(form);
    } else {
      confirm({
        text: "Pastikan tanggal mulai lebih besar dibandingkan tanggal selesai",
        icon: "error",
        showCancelButton: false,
        showResult: false,
      });
    }
  });
}

async function addProject(form) {
  const checkboxes = document.querySelectorAll(
    "input[name='technologies']:checked"
  );

  const descriptionLength = form.description.value.length;

  if (descriptionLength < 150) {
    return confirm({
      text: "Panjang deskripsi kurang dari 150",
      icon: "warning",
      showCancelButton: false,
      showResult: false,
    });
  }

  const isValid = form.checkValidity() && checkboxes.length > 0;
  if (isValid) {
    confirm({
      text: "Apakah Anda yakin ingin menambahkan data baru ?",
      icon: "question",
      titleConfirm: "Project berhasil ditambahkan",
      callback: () => {
        form.submit();
      },
    });
  } else {
    confirm({
      text: "Pastikan semuanya telah terisi",
      icon: "error",
      showCancelButton: false,
      showResult: false,
    });
    form.reportValidity();
  }
}

function editProject(form) {
  const checkboxes = document.querySelectorAll(
    "input[name='technologies']:checked"
  );

  const isValid = form.checkValidity() && checkboxes.length > 0;
  if (isValid) {
    confirm({
      text: "Apakah Anda yakin ingin merubah data ?",
      icon: "question",
      titleConfirm: "Project berhasil diubah",
      callback: () => {
        form.submit();
      },
    });
  } else {
    confirm({
      text: "Pastikan semuanya telah terisi",
      icon: "error",
      showCancelButton: false,
      showResult: false,
    });
    form.reportValidity();
  }
}

function confirm({
  title = "Konfirmasi",
  titleConfirm = "Project telah dihapus",
  text = "Apakah Anda yakin ingin menghapus ?",
  icon = "warning",
  showCancelButton = true,
  confirmText = "Ya",
  showResult = true,
  callback = () => {},
}) {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: showCancelButton,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmText,
  }).then(async (result) => {
    if (result.isConfirmed) {
      if (showResult) {
        await Swal.fire({
          title: "Sukses",
          text: titleConfirm,
          icon: "success",
        });
      }
      callback();
    } else {
      if (showResult) {
        await Swal.fire({
          title: "Dibatalkan",
          text: "Operasi dibatalkan",
          icon: "warning",
        });
      }
    }
  });
}
