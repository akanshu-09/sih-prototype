// Data for trains
const trainsData = {
    inService: [
        { id: 'T-001', status: 'Active', km: 15420, hvac: 'Good', maintenance: 'Good', jobCard: 'Closed', brandValue: 85000, adContract: 'Active' },
        { id: 'T-002', status: 'Active', km: 8930, hvac: 'Good', maintenance: 'Fair', jobCard: 'Closed', brandValue: 72000, adContract: 'Active' },
        { id: 'T-003', status: 'Active', km: 22100, hvac: 'Fair', maintenance: 'Good', jobCard: 'Closed', brandValue: 91000, adContract: 'Active' },
        { id: 'T-004', status: 'Active', km: 5670, hvac: 'Good', maintenance: 'Good', jobCard: 'Closed', brandValue: 68000, adContract: 'Inactive' },
    ],
    maintenance: [
        { id: 'T-005', status: 'Scheduled', km: 31200, hvac: 'Poor', maintenance: 'Fair', jobCard: 'Open', brandValue: 45000, adContract: 'Inactive' },
        { id: 'T-006', status: 'Scheduled', km: 18900, hvac: 'Fair', maintenance: 'Poor', jobCard: 'Open', brandValue: 52000, adContract: 'Inactive' },
        { id: 'T-007', status: 'Scheduled', km: 25600, hvac: 'Poor', maintenance: 'Fair', jobCard: 'Open', brandValue: 38000, adContract: 'Inactive' },
    ],
    standby: [
        { id: 'T-008', status: 'Ready', km: 12300, hvac: 'Good', maintenance: 'Good', jobCard: 'Closed', brandValue: 78000, adContract: 'Active' },
        { id: 'T-009', status: 'Ready', km: 9800, hvac: 'Fair', maintenance: 'Good', jobCard: 'Closed', brandValue: 81000, adContract: 'Active' },
        { id: 'T-010', status: 'Ready', km: 14500, hvac: 'Good', maintenance: 'Fair', jobCard: 'Closed', brandValue: 69000, adContract: 'Inactive' },
    ],
};

// Function to get status class
function getStatusClass(status) {
    switch(status) {
        case 'Active': return 'status-active';
        case 'Scheduled': return 'status-scheduled';
        case 'Ready': return 'status-ready';
        default: return '';
    }
}

// Function to get badge class
function getBadgeClass(value) {
    switch(value) {
        case 'Good': return 'badge-good';
        case 'Fair': return 'badge-fair';
        case 'Poor': return 'badge-poor';
        case 'Open': return 'badge-open';
        case 'Closed': return 'badge-closed';
        case 'Active': return 'badge-active';
        case 'Inactive': return 'badge-inactive';
        default: return '';
    }
}

// Function to create train card HTML
function createTrainCard(train) {
    return `
        <div class="train-card">
            <div class="train-header">
                <span class="train-id">${train.id}</span>
                <span class="status-tag ${getStatusClass(train.status)}">
                    ${train.status}
                </span>
            </div>
            <div class="train-info">
                <div class="info-item">
                    <span>📍</span>
                    <span>${train.km.toLocaleString()} km</span>
                </div>
                <div class="info-item">
                    <span>💰</span>
                    <span>₹${train.brandValue.toLocaleString()}</span>

                </div>
            </div>
            <div class="train-badges">
                <span class="badge ${getBadgeClass(train.hvac)}">
                    HVAC: ${train.hvac}
                </span>
                <span class="badge ${getBadgeClass(train.maintenance)}">
                    Maint: ${train.maintenance}
                </span>
                <span class="badge ${getBadgeClass(train.jobCard)}">
                    Job: ${train.jobCard}
                </span>
                <span class="badge ${getBadgeClass(train.adContract)}">
                    Ad: ${train.adContract}
                </span>
            </div>
        </div>
    `;
}

// Populate columns
function populateColumns() {
    document.getElementById('in-service').innerHTML = trainsData.inService.map(createTrainCard).join('');
    document.getElementById('maintenance').innerHTML = trainsData.maintenance.map(createTrainCard).join('');
    document.getElementById('standby').innerHTML = trainsData.standby.map(createTrainCard).join('');
}

// Initialize dashboard
populateColumns();

// Button handlers
document.querySelector('.btn-breakdown').addEventListener('click', function() {
    alert('Breakdown view - Feature coming soon!');
});

document.querySelector('.btn-reset').addEventListener('click', function() {
    if(confirm('Are you sure you want to reset all data?')) {
        populateColumns();
        alert('Dashboard reset successfully!');
    }
});
